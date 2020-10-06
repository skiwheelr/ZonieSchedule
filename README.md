# ZonieSchedule
NLU/NLP TimeZone-Specific Scheduler plugin for Google Assistant, Alexa, and Siri

Have you ever wanted to schedule a meeting on your phone, but you have to do math because it is in a different timezone?
No longer! Zonie will enable timezone-smart scheduling, to seamlessly manage your long-distance events.
Additional 'Actions' will be added as this project continues, starting with the first:

Zonie Schedule - Sequential Command Outline:

1 User will enter a starting utterance to launch the action: "Zonie Schedule"
   followed by intent-1: "a meeting" 
    [Optional Segment] Responded to by: "when?"
      followed by details input-1 & input-2:"at <4pm> in <new york> "
  
2 First Application will obtain local timezone based on: (TO BE DECIDED)
  - GEO(Mobile Device)
  - Curent Calendat Timezone

3 This will launch an API to gather the UTC of:
    - LocalZonie LZ = UTC difference (+/-) local timezone (e.g. NY is UTC-5)
    - TargetZonie TZ = UTC difference (+/-) of input-2 (e.g. Phoenix is UTC-7)
    
4 Logic on Lambda[AWS] or Local[GAsst] will then subtract TZ from LZ generating tDiff

5 The Amazon or gCal api will then be called to schedule a meeting at <input-1 + tDiff>
  This may require an AuthToken exchange unless it can be done with an existing google assistant provider.
    https://clearbridgemobile.com/how-to-develop-a-google-assistant-app-implementing-google-calendar-api/
    
6 Confirmation will be pushed to the screen |'ed from normal gCal scheduler if possible.
