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
#

class Note < ApplicationRecord
  belongs_to :user
  belongs_to :notebook

  include ActionView::Helpers::DateHelper

  def set_default_name
    self.name = self.name.blank? ? 'Untitled' : self.name
  end

  def last_updated
    time_ago_in_words(self.updated_at) + ' ago'
  end
end
