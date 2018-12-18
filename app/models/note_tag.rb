# == Schema Information
#
# Table name: note_tags
#
#  id         :bigint(8)        not null, primary key
#  note_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class NoteTag < ApplicationRecord
  belongs_to :note
  belongs_to :tag
end
