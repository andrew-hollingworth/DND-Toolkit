class Screen < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :conditions
  has_and_belongs_to_many :rests
  has_and_belongs_to_many :spells  

  def with_associations
    {
      id: id,
      name: name,
      modules: [
        conditions.empty? ? nil : {conditions: conditions},
        rests.empty? ? nil : {rests: rests},
        spells.empty? ? nil : {spells: spells},
      ].compact
    }
  end
end
