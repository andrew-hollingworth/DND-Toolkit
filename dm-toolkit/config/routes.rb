Rails.application.routes.draw do
  resources :spells
  resources :rests
  resources :conditions
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # ALL SCREENS
  get '/screens', to: 'screens#index'
  # ALL OF ONE USER'S SCREENS
  get '/screens/users/:id', to: 'screens#show' 
  # ONE SCREEN BY SCREEN ID
  get '/screens/:id', to: 'screens#one_screen'
  # CREATE SCREEN BY USER ID
  post '/screens/users/:id', to: 'screens#create'
  # DELETE SCREEN BY SCREEN ID
  delete '/screens/:id', to: 'screens#destroy'

  put '/screens/:id', to: 'screens#update_screen'
end
