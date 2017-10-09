class ConsolesController < ApplicationController

    def console_params
        params.require(:show).permit([:title, :released, :description, :image])
    end
    
    def index
        console = Console.all 
        render :json => console
    end

    def show
        console = Console.find(console_params)
        render :json => console
    end

    



end