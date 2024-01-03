def convert_to_military_time(time_str):
    try:
       
        time_parts = time_str.split(":")
        hour = int(time_parts[0])
        minute = int(time_parts[1])
        am_pm = time_parts[2][-2:].upper() 
        
        if am_pm == "PM" and hour != 12:
            hour += 12
        elif am_pm == "AM" and hour == 12:
            hour = 0
        
        military_time = f"{hour:02d}:{minute:02d}:{time_parts[2][:2]}"
        
        return military_time
    except ValueError:
        return "Invalid input format. Please provide time in 'hh:mm:ssAM/PM' format."

input_time_str = "3:45:00PM"
military_time_str = convert_to_military_time(input_time_str)
print("Military Time:", military_time_str)