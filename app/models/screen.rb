class Screen < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :conditions
  has_and_belongs_to_many :rests

  def with_associations
    {
      id: id,
      name: name,
      modules: [
        conditions.empty? ? nil : {conditions: conditions},
        rests.empty? ? nil : {rests: rests}
      ].compact
    }
  end
end
