# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, :user_id, presence: true
  validates_uniqueness_of :name, scope: [:user_id]

  belongs_to :user

  has_many :taggings,
    primary_key: :name,
    foreign_key: :tag_name,
    class_name: :Tagging,
    dependent: :destroy

  has_many :notes, through: :taggings
end
