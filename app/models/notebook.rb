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
  belongs_to :user
  has_many :notes, dependent: :destroy

  before_save :set_default_name

  include ActionView::Helpers::DateHelper

  def set_default_name
    self.name = self.name.blank? ? 'Untitled' : self.name
  end

  def last_updated
    time_ago_in_words(self.updated_at) + ' ago'
  end
end
