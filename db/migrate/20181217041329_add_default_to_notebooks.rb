class AddDefaultToNotebooks < ActiveRecord::Migration[5.2]
  def change
    add_column :notebooks, :is_default, :boolean, null: false, default: false
  end
end
