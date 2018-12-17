# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint(8)        not null, primary key
#  name       :string           default("Untitled")
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  is_default :boolean          default(FALSE), not null
#

class Notebook < ApplicationRecord
  # validates :is_default, presence: true, inclusion: { in: [true, false] }
  belongs_to :user
  has_many :notes, dependent: :destroy

  before_save :set_default_name

  include ActionView::Helpers::DateHelper

  def set_default_name
    self.name = self.name.blank? ? 'Untitled' : self.name
  end

  def last_updated_timestamp
    if self.notes.length > 0
      self.notes.max_by{ |note| note.updated_at }.updated_at
    else
      self.updated_at
    end
  end

  def last_updated
    time_ago_in_words(self.last_updated_timestamp) + ' ago'
  end

end
