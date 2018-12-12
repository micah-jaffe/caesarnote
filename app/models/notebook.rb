# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint(8)        not null, primary key
#  name       :string           default("Untitled")
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
  validates :user_id, presence: true
  belongs_to :user

  before_save :set_default_name

  def set_default_name
    self.name = self.name.blank? ? 'Untitled' : self.name
  end
end
