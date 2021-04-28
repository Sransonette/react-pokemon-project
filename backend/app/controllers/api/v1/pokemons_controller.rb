require "pry"
class Api::V1::PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all
        render json: pokemons

    end

    def show
        pokemon = Pokemon.find_by(params[:id])
        render json: pokemon

    end

    def create
            pokemon = Pokemon.create(pokemons_params)
                if pokemon.save
                    render json: pokemon
                else
                    render json: {error: 'Card was not added to collection'}
                end
    end

    def destroy
        pokemon = Pokemon.find_by(params[:id])
        pokemon.destroy
        render json: pokemon
    end

    private

    def pokemons_params
        params.require(:pokemon).permit(:name, :pokemon_type)
    end

end
