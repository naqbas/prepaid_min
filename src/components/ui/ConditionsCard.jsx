

function ConditionsCard(props) {
    return (
        <div>
            <h4 className="font-bold">{props.title}</h4>
            <p className="text-xs text-[#5c5c5c]">{props.caption}</p>
        </div>
    );
}

export default ConditionsCard