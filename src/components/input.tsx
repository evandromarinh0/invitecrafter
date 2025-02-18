import { Copy, Link, Mail, User } from "lucide-react";
import { ComponentProps } from "react";
import { IconButton } from "./iconButton";

interface InputProps extends ComponentProps<'input'> {
  error?: boolean;
  name?: string;
  button?: string;
  read?: string;
}

export function Input(props: InputProps){

  function getIcon(title: string){
    switch (title) {
      case "mail":
      return <Mail className="size-5" />;
      case "user":
      return <User className="size-5" />;
      case "link":
      return <Link className="size-5" />;
      default:
        return <></>
    }
  }

  return(
    <div data-error={props.error} className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger">
      
      <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger">
        {getIcon(props.name ?? '')}
      </span>

      <input readOnly={props.read === "readOnly"} className="bg-transparent flex-1 outline-0 placeholder-gray-400" {...props} />

      {props.button === "true" && (
        <IconButton className="-mr-2">
          <Copy className="size-5" />
        </IconButton>
      )}
    </div>
  )
}