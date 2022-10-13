import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import "./styles/global.css";
import { Envelope, Password } from "phosphor-react";
import { ReactNode } from "react";
export function App() {
    return (
        <div className="h-screen w-screen flex-col text-center flex justify-center items-center bg-gray-900">
            <BoxCard>
                <BoxCard>
                    <Text size="sm">Text Small</Text>
                </BoxCard>
                <BoxCard>
                    <Text size="md">Text Medium</Text>
                </BoxCard>
                <BoxCard>
                    <Text size="lg">Text Large</Text>
                </BoxCard>

                <BoxCard>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input placeholder="Digite seu e-mail" />
                    </TextInput.Root>
                </BoxCard>

                <BoxCard>
                    <TextInput.Root>
                        <TextInput.Input
                            type="password"
                            placeholder="Digite sua senha"
                        />
                    </TextInput.Root>
                </BoxCard>
                <BoxCard>
                    <div className="flex items-center gap-2">
                        <Checkbox /> <Text size="sm">Lembrar da senha</Text>
                    </div>
                </BoxCard>
                <BoxCard>
                    <Button>Submit</Button>
                </BoxCard>
            </BoxCard>
        </div>
    );
}

interface BoxCardProps {
    children: ReactNode;
}
function BoxCard({ children }: BoxCardProps) {
    return <div className="flex flex-col p-2 m-2">{children}</div>;
}
