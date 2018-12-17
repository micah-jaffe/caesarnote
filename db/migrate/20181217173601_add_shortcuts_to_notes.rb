class AddShortcutsToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :is_shortcut, :boolean, null: false, default: false
    add_column :notebooks, :is_shortcut, :boolean, null: false, default: false

    add_column :notes, :is_trashed, :boolean, null: false, default: false
    add_column :notes, :cipher_key, :integer, null: false, default: 0
  end
end
