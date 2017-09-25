# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
  validates :user_id, :name, presence: true
  validates_uniqueness_of :name, scope: [:user_id]

  has_many :notes, dependent: :destroy
  belongs_to :user
end
