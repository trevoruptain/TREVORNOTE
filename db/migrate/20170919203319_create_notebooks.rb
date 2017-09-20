class CreateNotebooks < ActiveRecord::Migration[5.1]
  def change
    create_table :notebooks do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.timestamps
    end

    add_index :notebooks, :id
    add_index :notebooks, :user_id
  end
end
