class Pokemon < ApplicationRecord
    validates_presence_of :name, :pokemon_type

    
end
