# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  title       :string           default("Untitiled")
#  body        :text
#  notebook_id :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  is_shortcut :boolean          default(FALSE), not null
#  is_trashed  :boolean          default(FALSE), not null
#  cipher_key  :integer          default(0), not null
#  is_ciphered :boolean          default(FALSE), not null
#

class Note < ApplicationRecord
  belongs_to :user
  belongs_to :notebook
  has_many :note_tags, dependent: :destroy
  has_many :tags,
    through: :note_tags,
    source: :tag

  before_save :set_default_name

  include ActionView::Helpers::DateHelper

  def set_default_name
    self.title = self.title.blank? ? 'Untitled' : self.title
  end

  def last_updated
    time_ago_in_words(self.updated_at) + ' ago'
  end
end
