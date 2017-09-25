json.extract! notebook, :id, :name, :user_id
json.notes do
  json.array! notebook.notes.ids
end
