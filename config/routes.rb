Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  resources :memberships
  resources :messages
  resources :conversations
  resources :users

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/welcome', to: 'sessions#welcome'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#auth'

end
