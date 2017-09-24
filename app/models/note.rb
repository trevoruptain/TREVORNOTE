# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  notebook_id :integer          not null
#  title       :string           not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  include ActionView::Helpers::DateHelper
  belongs_to :notebook


  def last_updated_in_words
    time_ago_in_words(self.updated_at) + " ago"
  end
end
