
export const NewInput = ({inputClass, type, placeholder, value, autoFocus}) => {

    return <input
        className={inputClass}
        {...(type ? {'type': type} : {})}
        {...(placeholder ? {'placeholder': placeholder} : {})}
        {...(value ? {'value': value} : {})}
        {...(autoFocus ? {'autoFocus': true} : {})}
        // autoFocus
    ></input>
}

{/* 
<input class="new-todo" placeholder="What needs to be done?" autofocus>
<input class="toggle" type="checkbox">
<input type="text" class="edit" value="Editing task"> */}