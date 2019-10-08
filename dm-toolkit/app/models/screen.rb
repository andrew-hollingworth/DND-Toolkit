class Screen < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :conditions

  def with_associations
    {
      id: id,
      name: name,
      modules: [
        conditions.empty? ? nil : {conditions: conditions}
      ].compact
    }
  end
end
