import Ionicons from '@expo/vector-icons/Ionicons';


export function UserPage() {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                <Ionicons name="filter-outline" size={32} color="black"
                />
            </TouchableOpacity>
        </>
    )
}