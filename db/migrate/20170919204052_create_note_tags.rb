class CreateNoteTags < ActiveRecord::Migration[5.1]
  def change
    create_table :note_tags do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_index :note_tags, :note_id
    add_index :note_tags, :tag_id
  end
end