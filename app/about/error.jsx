"use client"

export default function Error({error, resert}) {
    return (
        <div>
            this isn't loading up : {error.message}
            <button onClick={() => resert()}> Reload </button>
        </div>
    )
}
