Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notebooks, only: [:index, :create, :show, :update, :destroy] do 
      resources :notes, only: [:create]
    end

    resources :notes, only: [:index, :update, :destroy]
    resources :tags, only: [:index, :create, :destroy]
    resources :note_tags, only: [:destroy]
  end
end
