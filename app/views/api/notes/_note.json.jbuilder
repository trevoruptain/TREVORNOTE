json.extract! note, :id, :title, :body, :notebook_id, :created_at, :updated_at
json.notebook note.notebook
json.tags do
  json.array! note.tags.pluck(:name)
end
json.last_updated note.last_updated_in_words
