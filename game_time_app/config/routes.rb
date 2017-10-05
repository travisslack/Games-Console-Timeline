Rails.application.routes.draw do
 
  scope path: "api" do
    resources :consoles
  end

end