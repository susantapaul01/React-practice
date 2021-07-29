
function Text({ addEmoji, Bracket }) {
    let text = 'javascript';
    if(addEmoji) {
        text = addEmoji(text, '💘');
    }
    if(Bracket) {
        text = Bracket(text, '[', ']');
    }
    return (
        <div>
            { text }
        </div>
    )
}

export default Text;