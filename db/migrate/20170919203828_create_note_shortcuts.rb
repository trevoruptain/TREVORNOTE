class CreateNoteShortcuts < ActiveRecord::Migration[5.1]
  def change
    create_table :note_shortcuts do |t|
      t.integer :user_id, null: false
      t.integer :note_id, null: false

      t.timestamps
    end

    add_index :note_shortcuts, :user_id
    add_index :note_shortcuts, :note_id
  end
end
