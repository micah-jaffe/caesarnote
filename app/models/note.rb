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
  validates :title, presence: true
  validates :notebook_id, presence: true # REMOVE ONCE NOTEBOOK FEATURE IS ADDED

  belongs_to :user
end
