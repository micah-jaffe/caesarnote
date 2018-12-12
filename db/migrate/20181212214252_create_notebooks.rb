class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :name, default: 'Untitled'
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :notebooks, :name
    add_index :notebooks, :user_id
  end
end
