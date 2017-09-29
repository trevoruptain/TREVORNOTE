# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  note_id    :integer          not null
#  tag_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :note_id, :tag_name, presence: true
  validates :note_id, uniqueness: { scope: :tag_name, message: "already has this tag" }

  belongs_to :note

  belongs_to :tag,
    primary_key: :name,
    foreign_key: :tag_name,
    class_name: :Tag
end
