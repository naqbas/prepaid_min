

function ConditionsCard({title, caption}) {
    return (
        <div>
            <h4 className="font-bold">{title}</h4>
            <p className="text-xs text-[#5c5c5c]">{caption}</p>
        </div>
    );
}

export default ConditionsCard