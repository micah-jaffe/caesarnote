class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title, default: 'Untitiled'
      t.text :body
      t.integer :notebook_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :notes, :title
    add_index :notes, :notebook_id
    add_index :notes, :user_id
  end
end
