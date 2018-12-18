class Api::NoteTagsController < ApplicationController
  before_action :require_login

  def index
    @note_tags = current_user.note_tags
    render :index
  end

  def create
    @note_tag = NoteTag.new(note_tag_params)

    if @note_tag.save
      render :show
    else
      render json: @note_tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @note_tag = NoteTag.find(params[:id])
    @note_tag.destroy!
    render :show
  end


  def note_tag_params
    params.require(:note_tag).permit(:note_id, :tag_id)
  end
end
