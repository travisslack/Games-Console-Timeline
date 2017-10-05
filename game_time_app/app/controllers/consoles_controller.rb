class ConsolesController < ApplicationController

    def index
        console = Console.all 
        render :json => console
    end

    def show
        console = Console.find(params[:id])
        render :json => console
    end

    



end