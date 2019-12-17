import {LowerCasePostCreator, NormalPostCreator, PostCreatorHandler, UpperCasePostCreator} from "./post";
import {ErrorLogger, ErrorPrinter} from "./error";
import {JSONFileManager} from "./JSONFileManager";


const jsonError = new JSONFileManager("error")
const jsonPost= new JSONFileManager("post")
const logger = new ErrorLogger(jsonError)
const creator = new PostCreatorHandler(new ErrorPrinter(logger),
                                       new NormalPostCreator(jsonPost),
                                       new UpperCasePostCreator(jsonPost),
                                       new LowerCasePostCreator(jsonPost))

creator.execute("", "")
creator.execute("a", "")
creator.execute("", "a")
creator.execute("", "%b")
creator.execute("", "&b")
creator.execute('', "a")
creator.execute("a", "aB")
creator.execute("b", "&aB")
creator.execute("C", "%Aa")
