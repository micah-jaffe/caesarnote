# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :session_token, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :notebooks, dependent: :destroy
  has_many :notes, dependent: :destroy
  has_many :note_tags,
    through: :notes,
    source: :note_tags,
    dependent: :destroy
  has_many :tags, dependent: :destroy
    # through: :notes,
    # source: :tags,
    # dependent: :destroy

  attr_reader :password

  before_validation :ensure_session_token
  after_create :create_first_notebook

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.has_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def create_first_notebook
    self.notebooks.create!(name: "My First Notebook", is_default: true)
  end
end
