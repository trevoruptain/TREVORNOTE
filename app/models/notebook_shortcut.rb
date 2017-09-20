# == Schema Information
#
# Table name: notebook_shortcuts
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class NotebookShortcut < ApplicationRecord
end
