class Api::NotesController < ApplicationController
  before_action :require_login

  def index
    @notes = current_user.notes
    render :index
  end

  def create
    @note = Note.new(note_params)
    @note.user_id = current_user.id

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])
    
    if @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy!
    render :show
  end

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end

end