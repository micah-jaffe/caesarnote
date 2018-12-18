class AddIsCipheredToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :is_ciphered, :boolean, null: false, default: false
  end
end
