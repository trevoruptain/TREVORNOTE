class CreateTaggings < ActiveRecord::Migration[5.1]
  def change
    create_table :taggings do |t|
      t.integer :note_id, null: false
      t.string :tag_name, null: false
      t.timestamps
    end

    add_index :taggings, :note_id
    add_index :taggings, :tag_name
    add_index :taggings, [:note_id, :tag_name], unique: true
  end
end
