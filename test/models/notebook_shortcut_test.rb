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

require 'test_helper'

class NotebookShortcutTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
