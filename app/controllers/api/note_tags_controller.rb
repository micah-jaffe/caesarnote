class Api::NoteTagsController < ApplicationController
  def destroy
    @note_tag = NoteTag.find(params[:id])
    @note_tag.destroy
    render :show
  end
end