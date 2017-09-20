# == Schema Information
#
# Table name: note_shortcuts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class NoteShortcut < ApplicationRecord
end
