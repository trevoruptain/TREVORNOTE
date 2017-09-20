class CreateNotebookShortcuts < ActiveRecord::Migration[5.1]
  def change
    create_table :notebook_shortcuts do |t|
      t.integer :user_id, null: false
      t.integer :notebook_id, null: false

      t.timestamps
    end

    add_index :notebook_shortcuts, :user_id
    add_index :notebook_shortcuts, :notebook_id
  end
end
