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
#

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
