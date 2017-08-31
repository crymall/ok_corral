if @dialogues.length > 0
  @dialogues.each do |dialogue|
    json.set! dialogue.id do
      json.partial! 'api/dialogues/dialogue', dialogue: dialogue
    end
  end
end
